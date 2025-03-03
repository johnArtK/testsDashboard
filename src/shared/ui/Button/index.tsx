import "./index.css"

interface ButtonProps {
  text: string
  onClick: () => void
  color?: string
}

export const Button = ({ text, onClick, color = "#2EE5AC" }: ButtonProps) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: `${color}` }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
