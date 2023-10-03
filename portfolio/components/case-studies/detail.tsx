interface Props {
  title: string;
  text: string;
}

export default function Detail(props: Props) {
  return (
    <div className="prose pb-4">
      <span className="block opacity-60 prose-sm">{props.title}</span>
      <span className="block prose-base">{props.text}</span>
    </div>
  );
}