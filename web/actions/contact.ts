"use server";

import { Customer } from "@/models/customer";
import { Newsletter } from "@/models/newsletter";

export const contact = async (formData: FormData, params: {
    prefix?: string;
    locale: string;
}) => {
    if (formData.get("surname")) {
        const rawFormData = {
            name: formData.get("name"),
            surname: formData.get("surname"),
            email: formData.get("email"),
        };

        const exists = await Newsletter.findOne({
            email: rawFormData.email,
        }).exec();
        if (exists) {
            exists.name = rawFormData.name;
            exists.surname = rawFormData.surname;
            exists.email = rawFormData.email;
            exists.save();
            return;
        }

        const customer = await Customer.findOne({
            email: rawFormData.email,
        }).exec();
        if (customer) {
            customer.name = `${rawFormData.name} ${rawFormData.surname}`;
            customer.email = rawFormData.email;
            customer.newsletter = true;
            customer.save();
            return;
        }

        await Newsletter.create(rawFormData);
        return;
    }

    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        tel: params.prefix! + formData.get("tel"),
        message: formData.get("message"),
        inquiry: {
            buying: formData.get("buying") === "on",
            selling: formData.get("selling") === "on",
            chartering: formData.get("chartering") === "on",
            other: formData.get("other") === "on",
        },
        newsletter: formData.get("newsletter") === "on",
        status: "unclaimed",
    };

    const customer = await Customer.findOne({ email: rawFormData.email }).exec();
    if (customer) {
        customer.name = rawFormData.name;
        customer.email = rawFormData.email;
        customer.tel = rawFormData.tel;
        customer.message = rawFormData.message;
        customer.inquiry = rawFormData.inquiry;
        customer.newsletter = rawFormData.newsletter;
        customer.status = rawFormData.status;
        customer.save();
        return;
    }

    await Newsletter.findOneAndDelete({
        email: rawFormData.email,
    });
    await Customer.create(rawFormData);
};