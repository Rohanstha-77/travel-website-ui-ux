import Image from "next/image";

type ButtonProps={
  type:'button' | 'submit'; // | OR
  title: string;
  icon?:string; //? optional
  varient: string;
}

const Button = ({type,title,icon,varient}:ButtonProps) => { // ButtonProps define the type 
  return (
    <>
      <button type={type} className={`flexCenter gap-3 rounded-full border ${varient}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </>
  )
}

export default Button