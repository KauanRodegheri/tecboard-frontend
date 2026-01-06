import type { Ref } from "react";
import './input.css';

interface InputDto {
  type: string;
  placeholder?: string;
  className: string;
  ref: Ref<HTMLInputElement>
}

export default function Input({ type, placeholder, className, ref}: InputDto) {
  return (
    <input className={className} type={type} placeholder={placeholder} ref={ref} />
  )
}