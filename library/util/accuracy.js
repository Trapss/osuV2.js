module.exports = {
    accuracy: function accuracy(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki) {
        let total
        switch (mode) {
            case 0:
                // std
                total = hit50 + hit100 + hit300 + hit0
                return total = ((hit300 * 300 + hit100 * 100 + hit50 * 50) / (total * 300)) * 100
                break
            case 1:
                // taiko
                total = hit100 + hit300 + hit0
                return total = (((hit300 + hit100 * .5) * 300) / (total * 300)) * 100
                break
            case 2:
                // catch
                total = hit50 + hit100 + hit300 + hitkatu + hit0
                return total = ((hit50 + hit100 + hit300) / total) * 100
                break
            case 3:
                // mania
                total = hit50 + hit100 + hit300 + hitkatu + hitgeki + hit0
                return total = ((hit50 * 50 + hit100 * 100 + hitkatu * 200 + (hit300 + hitgeki) * 300) / (total * 300)) * 100
                break
            default:
                return total = 0
                break
        }
    }
}
