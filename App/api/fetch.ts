import { supabase } from '../../lib/supabase';

export interface OfficeListItem {
   id: number;
   name: string;
   date: {
      from: string;
      to?: string;
   };
   address: string;
   meta: string[];
}

export async function fetchOffices() {
   const { data, error } = await supabase.rpc('fetch_offices');

   if (error) throw error;

   const offices: OfficeListItem[] = data.map((row) => ({
      id: row.id,
      name: row.name,
      date: {
         from: 'Today',
      },
      address: row.address,
      meta: [`${row.count} Seats`, `${row.min_price} kr`],
   }));

   return offices;
}
