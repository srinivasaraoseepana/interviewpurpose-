import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  aadhaar?: string;
  mobile?: string;
  otp?: string;
  pan?: string;
  fullName?: string;
  dob?: string;
  employmentType?: 'salaried' | 'self-employed';
  companyOrBusiness?: string;
  addressLine?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  district?: string;
  videoKycConsent?: boolean;
}

const initialState: FormState = {};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;