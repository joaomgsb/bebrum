type ApiResponse<T> = {
  data?: T
  error?: string
  errors?: Record<string, string[]>
  status: number
}

export function successResponse<T>(data: T): ApiResponse<T> {
  return {
    data,
    status: 200
  }
}

export function errorResponse(error: Error): ApiResponse<never> {
  if (error instanceof ApiError) {
    return {
      error: error.message,
      status: error.statusCode
    }
  }

  if (error instanceof ValidationError) {
    return {
      errors: error.errors,
      status: 400
    }
  }

  return {
    error: "Erro interno do servidor",
    status: 500
  }
}