export const Image = ({src,alt,className, ...props}) => (
    <img alt={alt} src={src}  className={className || ""} {...props}/>
  );
  