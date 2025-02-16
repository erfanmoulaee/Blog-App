import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgComponent from "./SvgComponent";

export default function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...rest}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4 w-full
        ${className} 
        `}>
      {children}
      {pending && <SvgComponent />}
    </Button>
  );
}
