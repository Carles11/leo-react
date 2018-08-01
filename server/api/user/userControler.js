import User from './userModel'

export const list = async (req, res, next) => {
  try {
    const users = await User.find({})
    return res.status(201).json({'response': users})
  } catch (err) {
    return res.status(500).send(err)
  }
}

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    const users = await User.find({})
    res.status(201).json(users)
  } catch (err) {
    return res.status(500).send(err)
  }
}

export const userById =  async (req, res, next, id) => {
  try {
    req.user = await User.findById(id)
    next()
  } catch (err) {
    return res.status(404).send(err)
  }
}

export const read = (req, res) => {
  const user = {
    _id: req.user._id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    username: req.user.username,
  }

  return res.status(200).json({ 'response': user })
}

export const update = async(req, res) => {
  try {
    const updatedUser = Object.assign(req.user, req.body)
    const user = await updatedUser.save()
    res.status(201).json(user)
  } catch (err) {
    return res.status(500).send(err)
  }
}