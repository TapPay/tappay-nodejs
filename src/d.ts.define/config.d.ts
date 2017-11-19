declare module "config" {
    export interface InitialData {
        partner_key: string;
        env: string;
    }
    export interface Data {
        partner_key: string;
        env: string;
        base_url: string;
    }
}
