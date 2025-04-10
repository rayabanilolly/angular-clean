export interface CheckoutInput {
    checkout(cartId: string): Promise<void>;
}