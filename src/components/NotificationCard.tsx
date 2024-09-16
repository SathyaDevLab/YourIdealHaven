import "./notificationCard.css";

const NotificationCard = ({
  img,
  title,
  subTitle,
  btnText,
  href
}: {
  img: any;
  title: string;
  subTitle?: string;
  btnText: string;
  href?: string;
}) => {
  return (
    <div className="card hover:scale-105 w-[500px]">
      <div>
        <img
          src={img}
          alt="image"
          className="h-60 w-full object-cover rounded-lg"
        />
      </div>
      <div className="card-details mt-3">
        <p className="text-title">{title}</p>
        {subTitle && <p className="text-body">{subTitle}</p>}
      </div>
      <button className="card-button">
        <a className=" w-full h-full" target="_blank" href={href}>{btnText}</a>
      </button>
    </div>
  );
};

export { NotificationCard };
