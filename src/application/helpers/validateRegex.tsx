export const validate = {
  required: {
    required: "required",
  },
  number: {
    required: "required",
    pattern: {
      value: /^[0-9]/,
      message: "Please Enter number",
    },
  },
  phonenumber: {
    required: "required",
    pattern: {
      value: /^0[0-9]{9}$/,
      message: "Please Enter phonenumber",
    },
  },
  IdentificationNumber: {
    required: "required",
    pattern: {
      value: /^[0-9]{13}$/,
      message: "Please Enter Identification Number",
    },
  },
  email: {
    required: "required",
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please Enter Email",
    },
  },
  password: {
    required: "required",
    minLength: { value: 8, message: "password must be at least 8 character." },
  },
  dropDown: {
    required: "Please Select",
  },
};