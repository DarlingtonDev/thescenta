import Image from "next/image";

interface OrderItemProps {
  title: string;
  brand: string;
  price: string;
  image: string;
  alt: string;
}

const OrderItem = ({ title, brand, price, image, alt }: OrderItemProps) => {
  return (
    <div className="flex gap-3 py-2">
      <div className="w-14 h-14 bg-gray-100 rounded-md flex-shrink-0">
        <Image
          src={image}
          alt={alt}
          width={56}
          height={56}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-normal text-gray-900 font-inter truncate leading-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-500 font-inter truncate mt-0.5">
          {brand}
        </p>
        <p className="text-xs font-normal text-gray-900 mt-1 font-inter">
          {price}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
