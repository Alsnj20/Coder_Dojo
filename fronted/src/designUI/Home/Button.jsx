
function Button({text='', icon='', event=null, url=''}) {
  return (
    <a className="
    bg-primary-light
    text-text-light
    px-4 py-2 rounded-lg
    hover:bg-primary-dark
    flex items-center gap-2 
    " 
    href={url}
    >
      {icon && <i className={icon}></i>}
      {text}
    </a>
  );
}
export default Button;