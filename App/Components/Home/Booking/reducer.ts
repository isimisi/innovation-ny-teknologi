interface OfficeInformationState {
   isLoading: boolean;
}

const FETCH_INFO = 'FETCH_INFO';

interface FetchInformation {
   type: 'FETCH_INFO';
   payload: {};
}

type Actions = FetchInformation;

export const initialOfficeInformation = { isLoading: true };

export default function reducer(
   state: OfficeInformationState,
   action: Actions
) {
   switch (action.type) {
      case FETCH_INFO: {
         return { ...state };
      }
   }
}
