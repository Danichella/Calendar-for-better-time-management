import '../assets/sass/authorization.scss';

export const EditEntityForm = ({
  data,
  onChangeHandler,
  helperText = null,
}) => {
  return (
    <div className="authorization-wrapper">
      <div className="authorization-form-wrapper">
        {data.map((element, index) => (
          <div key={index}>
            <p className="authorization-input-label authorization-space-between">
              {`${element.title[0].toUpperCase()}${element.title.slice(1)}:`}
            </p>
            <input
              type={element.type ?? 'text'}
              className="authorization-input"
              placeholder={element.placeholder ?? `Enter your ${element.title}`}
              value={element.value ?? ''}
              onChange={(e) => onChangeHandler(element.id, e.target.value)}
            />
          </div>
        ))}
        {helperText && (
          <p className="authorization-helper-text">{helperText}</p>
        )}
      </div>
    </div>
  );
};
