export const validateEmail = (email: string): string => {
  if (!email) return "Email tidak boleh kosong, weh.";
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Format email-mu tidak valid";
  }
  return ""; 
};

export const validatePassword = (password: string): string => {
  if (!password) return "Password wajib diisi";
  if (password.length < 6) {
    return "Password minimal harus 6 karakter";
  }
  return ""; 
};