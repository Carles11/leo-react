import { signToken } from './index'

export default (req, res) => {
  const token = signToken(req.user._id)
  return res.json({ success: true, data: token })
}
