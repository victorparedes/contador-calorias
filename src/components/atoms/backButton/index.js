import { Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const BackButton = ()=> {
    const { goBack } = useNavigation();
    
    const handleAddCaloriesPress = ()=> {
        navigate('AddFood')
    };

    return <Button type="clear" onPress={()=>goBack()} icon={<Icon name="arrow-back" size={24} />} />;
};

export default BackButton;