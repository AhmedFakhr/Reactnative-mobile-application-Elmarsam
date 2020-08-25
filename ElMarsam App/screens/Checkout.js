import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";



export default class Checkout extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			currentStep: 0,
			steps: ['Review', 'Shipping', 'Payment', 'Submit']
		}
	}
	
	render() {
		const { navigation } = this.props;
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});
		
		const { steps, currentStep } = this.state;
		
		return (
			<View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10}}>
					<TouchableOpacity style={[styles.centerElement, {width: 50, height: 50}]} onPress={() => {}}>
					</TouchableOpacity>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000'}}>Checkout</Text>
					</View>
				</View>

				<View style={{alignItems: 'center'}}>
					<View style={{width: 280, height: 70}}>
						<View style={{alignItems: 'center'}}>
							<View style={{height: 2, backgroundColor: '#0faf9a', width: 180, position: 'absolute', top: 13, zIndex: 10}} />
						</View>
						<View style={{flexDirection: 'row', width: '100%', position: 'absolute', zIndex: 20}}>
							{steps.map((label, i) =>
								<View key={i} style={{alignItems: 'center', width: 70}}>
									{i > currentStep && i != currentStep && /* Not selected */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#fff', borderWidth: 2, borderColor: '#0faf9a', borderRadius: 15, marginBottom: 10}}>
											<Text style={{fontSize: 15, color: '#0faf9a'}}>{i+1}</Text>
										</View>
									}
									{i < currentStep && /* Checked */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#0faf9a', borderWidth: 2, borderColor: '#0faf9a', borderRadius: 15, marginBottom: 10}}>
											<Ionicons name="md-checkmark" size={20} color="#fff" />
										</View>
									}
									{i == currentStep && /* Selected */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#0faf9a', borderWidth: 2, borderColor: '#0faf9a', borderRadius: 15, marginBottom: 10}}>
											<Text style={{fontSize: 13, color: '#ffffff'}}>{i+1}</Text>
										</View>
									}
									<Text style={{fontSize: 12}}>{label}</Text>
								</View>
							)}
						</View>
					</View>
				</View>
				
				<View style={{backgroundColor: '#fff'}}>
					{currentStep == 0 &&
						<View style={{height: 200, alignSelf: 'center', padding:50}}>
						<TouchableOpacity style={[styles.centerElement , {backgroundColor: '#0faf9a', width: 100, height: 100, borderRadius: 75}]} onPress={() =>   navigation.navigate("AR") }>
								<Text style={{color: '#ffffff',fontWeight:'bold', textAlign: 'center'}}>Product Preview</Text>
							</TouchableOpacity>
						</View>
					}	
					{currentStep == 1 &&	
						<View style={{height: 300, alignSelf: 'center'}}>
								 <TextInput style = {{ margin: 8, borderRadius:8 , padding:10 ,height: 40,width:350, borderColor: '#0faf9a', borderWidth: 2}}
								 		
										placeholder = "Full Name"
										placeholderTextColor = "grey"
										
										/>
									<View flexDirection='row'>	
								<TextInput style = {{ margin: 8,height: 40,padding:10,borderRadius:8, width:250, borderColor: '#0faf9a', borderWidth: 2}}
											placeholder = "Street Address"
											placeholderTextColor = "grey"
											/>
									<TextInput style = {{margin: 8, padding:10 ,height: 40,width:84, borderRadius:8, borderColor: '#0faf9a', borderWidth: 2}}
											placeholder = "Apt/Suite #"
											placeholderTextColor = "grey"
											keyboardType='numeric'
											/>
											</View>
								<View flexDirection='row'>	
								<TextInput style = {{margin: 8, padding:10 ,height: 40,width:120, borderRadius:8, borderColor: '#0faf9a', borderWidth: 2}}
											placeholder = "City"
											placeholderTextColor = "grey"
											/>
								<TextInput style = {{margin: 8, padding:10 ,height: 40,width:114, borderRadius:8, borderColor: '#0faf9a', borderWidth: 2}}
											placeholder = "State"
											placeholderTextColor = "grey"
											/>
								<TextInput style = {{margin: 8, padding:10 ,height: 40,width:84, borderRadius:8, borderColor: '#0faf9a', borderWidth: 2}}
											placeholder = "Zip Code"
											placeholderTextColor = "grey"
											keyboardType='numeric'
											/>
								</View>
								<TextInput style = {{ margin: 8, borderRadius:8 , padding:10 ,height: 40,width:350, borderColor: '#0faf9a', borderWidth: 2}}
								 		
										 placeholder = "Phone"
										 placeholderTextColor = "grey"
										 keyboardType='numeric'
										 />
								 <TextInput style = {{ margin: 8, borderRadius:8 , padding:10 ,height: 40,width:350, borderColor: '#0faf9a', borderWidth: 2}}
								 		
										 placeholder = "Email Address"
										 placeholderTextColor = "grey"
										 keyboardType='email-address'
										 />
								</View>
					}	
					{currentStep == 2 &&	
						<View style={{height: 390,width:400 , padding:10 ,alignSelf: 'center'}}>
										<TextInput style = {{margin: 15, borderRadius:8 , padding:10 ,height: 40,width:350, borderColor: '#0faf9a', borderWidth: 2}}
								 		
										 placeholder = "Card Holder"
										 placeholderTextColor = "grey"
									    />
							<CreditCardInput onChange={this._onChange} />
						</View>
					}	
					{currentStep == 3 &&	
						<View style={[styles.centerElement , { width: 400,margin:20,alignSelf: 'center' ,height: 200, borderRadius: 75}]}>
							<Text style={{fontSize: 20,padding:15}}>Payment Successful</Text>
							<MaterialIcons name="done-all" size={25} color="#0faf9a" />
						</View>
					}
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						{currentStep > 0 ?
							<TouchableOpacity style={[styles.centerElement, {bottom: 10, left: 10, width: 80, height: 35, backgroundColor: '#0faf9a', elevation: 10, borderRadius: 20}]} onPress={() => {
								if(currentStep > 0){
									this.setState({currentStep: currentStep - 1});
								}
							}}>
								<Text style={{color: '#fff'}}>Back</Text>
							</TouchableOpacity>
							: <Text> </Text>
						}
						{(currentStep+1) < steps.length /* add other conditions here */ &&
							<TouchableOpacity style={[styles.centerElement, {bottom: 10, right: 10, width: 80, height: 35, backgroundColor: '#0faf9a', elevation: 10, borderRadius: 20}]} onPress={() => {
								if((currentStep+1) < steps.length){
									this.setState({currentStep: currentStep + 1});
								}
							}}>
								<Text style={{color: '#fff'}}>Next</Text>
							</TouchableOpacity>
						}
						{(currentStep+1) == steps.length /* add other conditions here */ &&
							<TouchableOpacity style={[styles.centerElement, {bottom: 10, right: 10, width: 80, height: 35, backgroundColor: '#0faf9a', elevation: 10, borderRadius: 20}]} onPress={() => navigation.navigate("Browse")}>
								<Text style={{color: '#fff'}}>Finish</Text>
							</TouchableOpacity>
						}
					</View>
				</View>
			</View>
		);
	}
} 