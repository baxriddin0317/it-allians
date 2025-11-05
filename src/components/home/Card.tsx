import CardTitle from './CardTitle'

interface props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Card = ({children, title, className}: props) => {
  return (
    <div className={`w-full card pl-8 pr-3 ${className}`}>
      {title && <CardTitle title={title} />}
      {children}
    </div>
  )
}

export default Card