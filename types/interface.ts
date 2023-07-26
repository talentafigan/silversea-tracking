export interface interfaceSidebar {
  title?: string;
  icon?: string;
  allow?: string;
  child?: interfaceSidebar[];
  to?: string;
}

export interface interfaceProduct {
  name: string;
  images: string[];
  category: string;
  cogs: number;
  salePrice: number;
  sales?: number;
  stock: number;
  status?: string;
}

export interface interfacePagination {
  perPage?: number | string;
  page: number;
  size: number;
}

export interface interfaceTransaction {
  date: string;
}

export interface UserDto {
  name: string;
  username: string;
  password: string;
  role: string;
}

export interface BookingInterface {
  bookingId?: any;
  blNumber?: any;
  bookingNumber?: any;
  shipperName?: any;
  shipperPhone?: any;
  shipperAddress?: any;
  shipperEmail?: any;
  receiverName?: any;
  receiverPhone?: any;
  receiverAddress?: any;
  receiverEmail?: any;
  shipments: ShipmentInterface[];
  containers: ContainerInterface[];
}

export interface ShipmentInterface {
  bookingId?: any;
  weight?: any;
  estimateDepartureDate?: any;
  estimateArivalDate?: any;
  portLoading?: any;
  portDischarge?: any;
  vesselName?: any;
  voyageNumber?: any;
  transhipmentPort?: any;
  status?: any;
  departureDate?: any;
  arivalDate?: any;
}

export interface ContainerInterface {
  bookingId?: any;
  containerNumber?: any;
  sealNumber?: any;
  descriptionOfGoods?: any;
  weight?: any;
  volume?: any;
}
