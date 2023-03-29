const movie = () => {
 alert("E.T. O Extraterrestre");
};
const Button = ({ label }) => {
  return <button onClick={movie}>{label}</button>;
};

Button.defaultProps = {
    label : 'Clique Aqui Para saber o nome do filme'
}
export default Button;