export type Json =
   | string
   | number
   | boolean
   | null
   | { [key: string]: Json | undefined }
   | Json[];

interface FetchOffices {
   count: number;
   id: number;
   address: string;
   min_price: number;
   name: string;
}

export interface Database {
   public: {
      Tables: {
         offices: {
            Row: {
               address: string | null;
               created_at: string;
               id: number;
               name: string | null;
               organization_id: number | null;
            };
            Insert: {
               address?: string | null;
               created_at?: string;
               id?: number;
               name?: string | null;
               organization_id?: number | null;
            };
            Update: {
               address?: string | null;
               created_at?: string;
               id?: number;
               name?: string | null;
               organization_id?: number | null;
            };
            Relationships: [
               {
                  foreignKeyName: 'offices_organization_id_fkey';
                  columns: ['organization_id'];
                  referencedRelation: 'organizations';
                  referencedColumns: ['id'];
               }
            ];
         };
         organizations: {
            Row: {
               created_at: string;
               id: number;
               name: string | null;
            };
            Insert: {
               created_at?: string;
               id?: number;
               name?: string | null;
            };
            Update: {
               created_at?: string;
               id?: number;
               name?: string | null;
            };
            Relationships: [];
         };
         profiles: {
            Row: {
               created_at: string;
               id: string;
               nick_name: string | null;
            };
            Insert: {
               created_at?: string;
               id: string;
               nick_name?: string | null;
            };
            Update: {
               created_at?: string;
               id?: string;
               nick_name?: string | null;
            };
            Relationships: [
               {
                  foreignKeyName: 'profiles_id_fkey';
                  columns: ['id'];
                  referencedRelation: 'users';
                  referencedColumns: ['id'];
               }
            ];
         };
         reservations: {
            Row: {
               created_at: string;
               end_time: string | null;
               id: number;
               seat_id: number | null;
               start_datetime: string | null;
            };
            Insert: {
               created_at?: string;
               end_time?: string | null;
               id?: number;
               seat_id?: number | null;
               start_datetime?: string | null;
            };
            Update: {
               created_at?: string;
               end_time?: string | null;
               id?: number;
               seat_id?: number | null;
               start_datetime?: string | null;
            };
            Relationships: [
               {
                  foreignKeyName: 'reservations_seat_id_fkey';
                  columns: ['seat_id'];
                  referencedRelation: 'seats';
                  referencedColumns: ['id'];
               }
            ];
         };
         seats: {
            Row: {
               created_at: string;
               id: number;
               office_id: number | null;
               price: number;
            };
            Insert: {
               created_at?: string;
               id?: number;
               office_id?: number | null;
               price?: number;
            };
            Update: {
               created_at?: string;
               id?: number;
               office_id?: number | null;
               price?: number;
            };
            Relationships: [
               {
                  foreignKeyName: 'seats_office_id_fkey';
                  columns: ['office_id'];
                  referencedRelation: 'offices';
                  referencedColumns: ['id'];
               }
            ];
         };
      };
      Views: {
         [_ in never]: never;
      };
      Functions: {
         fetch_offices: {
            Args: Record<PropertyKey, never>;
            Returns: FetchOffices[];
         };
      };
      Enums: {
         [_ in never]: never;
      };
      CompositeTypes: {
         [_ in never]: never;
      };
   };
}

export type Tables<T extends keyof Database['public']['Tables']> =
   Database['public']['Tables'][T]['Row'];
