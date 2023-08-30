const db = require("../models")
const { Op } = require("sequelize")

const addNewAppointment = async (req, res, next) => {
    let { patientName, patientPhoneNumber, patientEmail, description, date, time, scheduleId, doctorId, currentNumber } = req.body
    try {
        let schedule = await db.Schedules.findByPk(scheduleId, {
            attributes: ["currentNumber", "maxNumber"]
        })
        if (schedule.currentNumber >= schedule.maxNumber) {
            console.log("No slot left")
            return res.status(500).json({
                message: "full slot",
            })
        }
        try {
            let count = await db.Appointments.count({
                where: {
                    scheduleId: scheduleId
                }
            })
            let id = scheduleId + (count + 1).toString()
            await db.Appointments.create({
                id: id,
                status: 0,
                doctorId: doctorId,
                patientName: patientName,
                patientPhoneNumber: patientPhoneNumber,
                patientEmail: patientEmail,
                description: description,
                date: new Date(date),
                time: time,
                preAppointmentId: id,
                scheduleId: scheduleId,
                createdAt: new Date(),
                updatedAt: new Date()
            }).then(async () => {
                try {
                    let schedule = db.Schedules.update({
                        currentNumber: currentNumber + 1
                    }, {
                        where: {
                            id: scheduleId
                        }
                    })
                    if (schedule === [0]) {
                        console.log("No matching schedule");
                    }
                    return res.status(200).json({
                        message: "ok",
                    })
                } catch (error) {
                    console.log("Cannot update schedule. Error: ", error);
                    return res.status(500).json({
                        message: "server error!",
                    })
                }
            }).catch((error) => {
                console.log("Cannot create appointment. Error: ", error);
                return res.status(500).json({
                    message: "server error!",
                })
            })
        } catch (error) {
            console.log("Cannot count appointment. Error: ", error);
            return res.status(500).json({
                message: "server error!",
            })
        }
    } catch (error) {
        console.log("Cannot check current slot. Error: ", error);
        return res.status(500).json({
            message: "server error!",
        })
    }
}

const getAllAppointments = async (req, res, next) => {
    let { doctorId, date, time, status } = req.query
    //Structure data need to find
    let find = {};
    if (doctorId) {
        find.doctorId = doctorId
    }
    if (date) {
        find.date = {
            [Op.eq]: new Date(date)
        }
    }
    if (time) {
        find.time = time
    }
    if (status) {
        find.status = status
    }

    try {
        let data = await db.Appointments.findAll({
            where: find,
            include: [
                {
                    model: db.Doctors,
                    attributes: ["name"]
                }
            ]
        })
        return res.status(200).json({
            message: "ok",
            data: data
        })
    } catch (err) {
        console.log("Cannot get data. Error:", err)
        return res.status(500).json({
            message: "server error!",
        })
    }
}

module.exports = {
    addNewAppointment,
    getAllAppointments,
}