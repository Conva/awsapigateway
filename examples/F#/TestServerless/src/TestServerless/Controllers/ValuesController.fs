namespace TestServerless.Controllers


open Microsoft.AspNetCore.Mvc
open TestServerless.ExampleTypes.Types




[<Route("api/[controller]")>]
type ValuesController() =
    inherit Controller()

    [<HttpGet>]
    member this.Get() =
        let a = this.User.Claims
        [|"value1"; "value2"|]

    [<HttpGet("{id}")>]
    member this.Get(id: int) =
        "value"

    [<HttpPost>]
    member this.Post([<FromBody>] value: ExampleType) =
        let a = this.User
        [|"value1"; "value2"|]


    [<HttpPut("{id}")>]
    member this.Put(id: int, [<FromBody>] value: ExampleType) =
        ()

    [<HttpDelete("{id}")>]
    member this.Delete(id: int) =
        ()
