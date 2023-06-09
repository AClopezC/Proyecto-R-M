const validation = (userData) => { //el userData podría ser cualquier nombre.
   const errors = {};

   if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/i.test(userData.email)) {
     errors.email = "El email ingresado no es válido";
   }
   if (!userData.email) {
      errors.email = 'Ingrese un email';
   }
   if (userData.email.length > 35) {
      errors.email = 'Excede la cantidad de caracteres permitidos'
   }
   if (!/.*\d+.*/.test(userData.password)){
      errors.password = 'La contraseña debe contener al menos un número '
   }
   if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener un tamaño de entre 6 y 10 caracteres'
   }
   return errors;
}


export default validation;