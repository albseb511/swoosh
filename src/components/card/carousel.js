import SideSwipe from 'react-native-sideswipe';
import React, {Component} from 'react'

export default class SCarousel extends Component {
    render(){
        return(
            <View>
                 <SideSwipe
                    index={this.state.currentIndex}
                    itemWidth={CustomComponent.WIDTH}
                    style={{ width:Dimensions.get('window') }}
                    data={data}
                    contentOffset={10}
                    onIndexChange={index =>
                    this.setState(() => ({ currentIndex: index }))
                    }
                    renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                        <View></View>
                    )}
                    />

            </View>

        )        
        }
}