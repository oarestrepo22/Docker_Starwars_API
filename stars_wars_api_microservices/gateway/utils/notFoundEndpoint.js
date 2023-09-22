const notFoundEndpoint = (req, res) => {
    res.status(404).send('Not found')
}

module.exports = notFoundEndpoint