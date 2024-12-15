"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AdminEventForm } from "@/components/admin/event-form";
import { AdminEventList } from "@/components/admin/event-list";
import { AdminGalleryForm } from "@/components/admin/gallery-form";
import { AdminGalleryList } from "@/components/admin/gallery-list";

export default function AdminEventosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"events" | "gallery">("events");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Acesso não autorizado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Gerenciamento de Eventos
          </h1>
          <Button onClick={() => router.push("/")}>Voltar ao Site</Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex space-x-4 mb-6">
            <Button
              variant={activeTab === "events" ? "default" : "outline"}
              onClick={() => setActiveTab("events")}
            >
              Próximos Eventos
            </Button>
            <Button
              variant={activeTab === "gallery" ? "default" : "outline"}
              onClick={() => setActiveTab("gallery")}
            >
              Galeria
            </Button>
          </div>

          {activeTab === "events" ? (
            <div className="space-y-8">
              <AdminEventForm />
              <AdminEventList />
            </div>
          ) : (
            <div className="space-y-8">
              <AdminGalleryForm />
              <AdminGalleryList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
