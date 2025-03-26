import { useState } from "react"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { motion } from "framer-motion"


const mainVariants = {
  hidden: {opacity:0},
  visible: {
    opacity:1,
    transition: {
      delay: 0.5,
      duration: 2,
    }
  }
}

type FormData = {
  name: string;
  email: string;
  message: string
};

const Contact = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email:"",
    message:""
  })

  const [errors, setErrors] = useState<{ [key: string]: boolean}>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
    [e.target.name]: false
    })
  }

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {}
    if (!formData.name) {
      newErrors.name = true
    }

    if (!formData.email) {
      newErrors.email = true
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = true
    }

    if (!formData.message) {
      newErrors.message = true
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formErrors = validate()
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://ewajochymkova.cz/backend/contact-form.php",
          formData,
          {
            headers: { 
              "Content-Type": "application/json",
              "Accept": "application/json"
            }, 
          }
        );
        
        if (response.data.status === "success") {
          toast.success("Formulář byl úspěšně odeslán.")
          setFormData({name:"", email:"", message:""})
          setErrors({})
        } else {
          toast.error("Nastala chyba, zkuste to prosím ještě jednou.")
        }
        } catch (error) {
          console.log("Chyba:", error);
          toast.error("Nastala chyba, zkuste to prosím ještě jednou.")
        }
        } else {
          Object.values(formErrors).forEach((error) => toast.error(error))
        }
      } 

  return <section id="contact" className="h-screen flex justify-center items-center">
    <motion.div 
    variants={mainVariants}
    initial="hidden"
    animate="visible"
    className="h-[50rem] w-[20rem] flex flex-col items-center bg-[#1C1E12] rounded-lg sm:w-[25rem] md:w-[35rem] ">

      <div className="flex flex-col justify-center items-center h-[15rem] ">
        <h2 className="pb-5 pt-5 font-bold text-3xl text-[#cbcfcd]">Kontakt</h2>
        <p className="text-center text-[#cbcfcd]">Kontaktovat mě můžete e-mailem: <b>ewa.jochymkova@seznam.cz</b>, přes <a href="https://www.linkedin.com/in/ewa-jochymkova" className="font-bold">LinkedIn</a> nebo pomocí kontaktního formuláře.</p>
      </div>

      <form 
      onSubmit={handleSubmit} 
      className="h-[40rem] flex flex-col items-center">

        <label className="font-semibold text-[#cbcfcd] py-3">Jméno</label>
        <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        className={`rounded-md pl-2 h-10 outline-none md:w-[20rem] ${errors.name ? "border-red-500 border-2" : ""}`}
        placeholder="Vaše jméno" 
        required/>

        <label className="font-semibold pb-3 pt-7 text-[#cbcfcd]">E-mail</label>
        <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className={`rounded-md pl-2 h-10 outline-none md:w-[20rem] ${errors.email ? "border-red-500 border-2" : "" }`} 
        placeholder="jmeno@xyz.cz"
        required/>

        <label className="font-semibold pb-3 pt-7 text-[#cbcfcd]">Zpráva</label>
        <textarea 
        cols={25} 
        rows={10} 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        className={`rounded-md pl-2 pt-2 resize-none outline-none md:w-[20rem] ${errors.message ? "border-red-500 border-2" : ""}`} 
        placeholder="Text"
        required></textarea>
       
        <motion.input 
        type="submit" 
        value="Odeslat" 
        whileHover={{
          textShadow: "0px 0px 8px #ffffff",
          boxShadow: "0px 0px 8px #ffffff"
        }}
        className="w-20 h-10 my-7 outline-none text-[#cbcfcd] font-semibold rounded-md border border-[#cbcfcd] active:scale-110" />
      </form>
      
      <ToastContainer position="bottom-center" autoClose={3000} />
    </motion.div>
  </section>
}

export default Contact