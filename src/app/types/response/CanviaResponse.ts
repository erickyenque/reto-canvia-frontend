export interface CanviaResponse<T> {
    success:  boolean,
    message: string,
    data:  Array<T>
}