import { z } from "zod"

export const OrderSchema = z.object({
    name: z.string().min(1, 'Tu nombre es Obligatorio'),
    total: z.number().min(1, 'Hay errores en el pedido'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        precio: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const SearchSchema = z.object({
    search: z.string().trim().min(1, {message: 'La busqueda no puede ir vacia'})
})