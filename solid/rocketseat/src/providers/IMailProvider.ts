interface IAddress {
  email: string;
  name: string;
}

export interface IMessage{
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  //void, pois não tem retorno nenhum dentro dessa Promise
  sendMail(message: IMessage): Promise<void>
}