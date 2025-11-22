export const loginValidation = {
  email: {
    required: "Ingresa tu correo electrónico",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Ingresa un correo electrónico válido",
    },
  },
  password: {
    required: "Ingresa tu contraseña",
    minLength: {
      value: 1,
      message: "La contraseña es requerida",
    },
  },
};

export const validateLoginForm = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = "Ingresa tu correo electrónico";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Ingresa un correo electrónico válido";
  }

  if (!password) {
    errors.password = "Ingresa tu contraseña";
  }

  return Object.keys(errors).length > 0 ? errors : null;
};