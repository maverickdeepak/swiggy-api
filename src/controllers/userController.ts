export class UserController {
  static login(req, res, next) {
    try {
        const data = [{ id: 121, email: "swiggy@example.com" }];
        res.status(200).json({ message: "success", data: data });
    } catch (error) {
        const err = new Error(error)
        next(err)
    }
  }

  static test(req, res, next) {
    try {
        res.send("test api");
    } catch (error) {
        const err = new Error(error)
        next(err)
    }
  }
}
