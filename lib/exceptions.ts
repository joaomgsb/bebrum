export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message)
    this.name = "ApiError"
  }
}

export class ValidationError extends Error {
  constructor(
    public errors: Record<string, string[]>
  ) {
    super("Validation failed")
    this.name = "ValidationError"
  }
}

export class AuthorizationError extends Error {
  constructor(message = "Não autorizado") {
    super(message)
    this.name = "AuthorizationError"
  }
}