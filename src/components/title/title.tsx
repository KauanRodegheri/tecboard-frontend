import './title.css';

interface FormTitleDto {
  title: string;
}

export default function FormTitle({title}: FormTitleDto) {
  return (
    <h2>
      {title}
    </h2>
  )
}