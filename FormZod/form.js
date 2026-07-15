 const { z } = window.Zod;
  const registerSchema = z.object({
 name : z.string().min(1, "El nombre es obligatorio"),
 email: z.string().email("Correo no válido"),
 password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
     });

    document.getElementById("name").addEventListener("input", () => {
  const valor = document.getElementById("name").value;
  const resultado = registerSchema.shape.name.safeParse(valor); 

   if (resultado.success) {
    document.getElementById("nameError").textContent = "";
  } else {
    document.getElementById("nameError").textContent = resultado.error.errors[0].message;
  }
});

document.getElementById("email").addEventListener("input", () => {
  const valor = document.getElementById("email").value;
  const resultado = registerSchema.shape.email.safeParse(valor); 

  if (resultado.success) {
    document.getElementById("emailError").textContent = "";
  } else {
    document.getElementById("emailError").textContent = resultado.error.errors[0].message;
  }
});

document.getElementById("password").addEventListener("input", () => {
  const valor = document.getElementById("password").value;
  const resultado = registerSchema.shape.password.safeParse(valor); 

  if (resultado.success) {
    document.getElementById("passwordError").textContent = "";
  } else {
    document.getElementById("passwordError").textContent = resultado.error.errors[0].message;
  }
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
event.preventDefault();

const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      try {
    console.log("Datos a validar:", formData);
    registerSchema.parse(formData);
    console.log("¡Pasó la validación!");
     alert("¡Registro exitoso!");
      } catch (error) {
        error.errors.forEach((e) => {
            const campo = e.path[0];
            const idDelError = `${campo}Error`;
            document.getElementById(idDelError).textContent = e.message;
            });
        }
    });
