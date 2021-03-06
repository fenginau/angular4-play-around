﻿export interface ICompanyModel {
    companyId: number;
    companyName: string;
    companyAddress: string;
    companyEmail: string;
    companyPhone1: string;
    companyPhone2: string;
    companyAbn: string;
    companyAcn: string;
}

export interface IProductModel {
    productId: number;
    productName: string;
    productDesc: string;
    companyId: number;
    companyName: string;
}

export interface IContactModel {
    contactId: number;
    contactName: string;
    contactEmail: string;
    contactPhone1: string;
    contactPhone2: string;
    companyId: number;
    companyName: string;
}

export interface ITradeModel {
    tradeId: number;
    companyId: number;
    tradeType: number|string;
    tradeInvoice: string;
    tradeDate: Date|string;
    tradeNote: string;
    companyName: string;
    products: ITradeProductModel[];
};

export interface ITradeProductModel {
    tradeId: number;
    productId: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    total: number;
};

export interface IAttachmentModel {
    attachemntId: number;
    attachmentName: string;
    attachmentDescription: string|null;
    attachmentType: string;
    attachmentTypeStr: string|null;
    attachmentCreateDt: Date|string|null;
}

export interface ISelectModel {
    key: number;
    value: string;
}

export interface ICompanySelectModel {
    companyId: number;
    companyName: string;
}



// used by search component
export interface ISearchModel {
    field: string;
    control: number;
    value: any;
    set?: IValueTextModel[] | null;
}

export interface IValueTextModel {
    value: string|number|boolean;
    text: string;
    select?: string|number|boolean;
}

export interface ISearchParams {
    key: string;
    value: string;
}

export interface ISearchReturnModel {
    count: number;
    result: any;
}