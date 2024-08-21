import AsyncStorage from "@react-native-async-storage/async-storage";

async function save(key: string, value: string) {
    if (!key) {
        return false;
    }
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (error) {
        return false;
    }
}

async function remove(key: string) {
    if (!key) {
        return false;
    }
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        return false;
    }
}

async function update(key: string, value: string) {
    if (!key) {
        return false;
    }
    try {
        await AsyncStorage.mergeItem(key, value);
        return true;
    } catch (error) {
        return false;
    }
}

async function get(key: string) {
    if (!key) {
        return false;
    }
    try {
        const item = await AsyncStorage.getItem(key);
        //  console.log(item)
        return item;
    } catch (error) {
        return;
    }
}

async function getAll() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const entries = await AsyncStorage.multiGet(keys);

        return entries;
    } catch (error) {
        return;
    }
}

const favoriteService = {
    save,
    remove,
    update,
    get,
    getAll,
};

export default favoriteService;
