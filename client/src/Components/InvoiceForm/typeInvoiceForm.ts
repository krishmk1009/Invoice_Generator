export interface formFields {
    formLabel: string;
    labelForName: string;
    labelForAddress: string;
   
  }
  export interface FormDetails{
    name:string,
    address:string
  }
  
  export interface DetailFormProps extends formFields{
    data:FormDetails ,
    setData: React.Dispatch<React.SetStateAction<FormDetails>>
  }