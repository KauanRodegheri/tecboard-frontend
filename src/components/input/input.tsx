/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Ref } from "react";
import './input.css';

interface InputDto {
  type: string;
  name?: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  value: string;
  onChange: any;
  className?: string;
}

export default function Input({ type, placeholder, ref, name, ...rest}: InputDto) {
  return (
    <input className="input-form" type={type} placeholder={placeholder} ref={ref} name={name} {...rest} />
  )
}