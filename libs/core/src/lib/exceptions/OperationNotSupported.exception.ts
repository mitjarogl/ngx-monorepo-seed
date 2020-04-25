export class OperationNotSupportedException extends Error {
  constructor(message: string) {
    const errorMessage = `Operation not supported: ${message}`;
    super(errorMessage);
  }
}
