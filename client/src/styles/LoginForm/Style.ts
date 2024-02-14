

export interface AuthStyles {
    flexContainer: string;
    backgroundContainer: string;
    image: string;
    formContainer: string;
    heading: string;
    input: string;
    button: string;
    link: string;
  }
  
  export const authStyles: AuthStyles = {
    flexContainer: "flex flex-col md:flex-row h-screen items-center",
    backgroundContainer: "bg-gray-700 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen",
    image: "w-full h-full object-cover opacity-50",
    formContainer: "bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center",
    heading: "text-xl md:text-2xl font-bold leading-tight mt-12",
    input: "w-full px-4 py-3 mb-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none",
    button: "w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6",
    link: "mt-8",
  };
  