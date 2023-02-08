# DI - README

since the provided code is fucking borked
this folder is a walk a long with reading the docs 

this stuff cannot be ran but is kept for demo purposes

## demo 1 - Injection Examples `Product`

> Imagine we have a store that has `Products` and we need to calculate the final price of that product *after sales tax*.
> To do this we use a `PriceService` to that takes as args
> - *base price* of the `Product`
> - the *state* it is sold to
> Then return the final `Product` price + tax

The purpose of this is using DI in unit tests, providing predictable behavior
for functions that interacts with external components (API calls, server responses)

### File Format
Service Files
`price.service.1.ts` - current function to test, containing unpredictable behavior
`price.service.mock.ts` - mock service - defining the mock function, setting the predictable behavior
Model Files
`product.model.1.ts` - product model
`product.model.ts` - **updated** product model using interface
Test Files
`price.test.1.ts` - test file, testing `price.service.1` contain unpredictable behavior
`price.test.ts` - modified test file, using mock service
Interfaces
`price-service.interface.ts` - interface for price-service - contain test target declaration but no definition