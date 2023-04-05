import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Constants/context'
import PromoModal from '../Components/MODAL/PromoModal'


const Welcome = () => {
    const { authContext } = useContext(AuthContext)

    return (
        <View>
            <PromoModal />
            <Text>Welcome</Text>
            <TouchableOpacity style={{ backgroundColor: 'blue', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => authContext.signOut()}>
                <Text style={{ color: '#FFF' }}>Logout</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})