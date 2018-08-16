import School from './schoolModel'

export const list = async (req, res) => {
  try {
    const schools = await School.find({})
    return res.status(200).json(schools)
  } catch (err) {
    return res.status(500).send(err)
  }
}

export const create = async (req, res) => {
  try {
    const newSchool = await new School(req.body)
    await newSchool.save()
    const schools = await School.find({})
    return res.status(201).json({ success: true, response: schools })
  } catch (err) {
    return res.status(500).send({ success: false, response: err })
  }
}

export const update = async (req, res) => {
  try {
    const updateSchool = Object.assign(req.school, req.body)
    await updateSchool.save()
    const schools = await School.find({})
    return res.status(200).json(schools)
  } catch (err) {
    return res.status(500).send(err)
  }
}

export const schoolById = async (req, res, next, id) => {
  try {
    req.school = await School.findById(id)
    next()
  } catch (err) {
    return res.status(404).send(err)
  }
}