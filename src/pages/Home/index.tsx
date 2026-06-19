import  Icon  from '@expo/vector-icons/Ionicons';
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { styles } from './style';
import { MetaCard } from '../../components/MetaCard/Index';
import { ConquistaCard } from '../../components/ConquistaCard';

export const Home = () => {

    const saudacao = () => {
        const horaAtual = new Date().getHours();

        if (horaAtual >= 5 && horaAtual < 12) {
            return 'Bom dia';
        } else if (horaAtual >= 12 && horaAtual < 18) {
            return 'Boa tarde';
        } else {
            return 'Boa noite'; 
        }
    };

    return(
        <ScrollView style={styles.container}>
            <View>
              <View style={styles.contMensagem}>
                  <Text style={styles.contTitulo}>{saudacao()}, Thon.</Text>
                  <Text style={styles.contSubtitulo}>Cada passo na sua jornada conta.</Text>
              </View>

              <View style={styles.contBox}>
                <Text>OI</Text>
              </View>

              <View style={styles.contMetas}>
                  <Text style={styles.contSubtitulo}>Próximas metas</Text>

                  <View>
                    <MetaCard 
                    titulo='Ler 20 Páginas'
                    subtitulo='Rotina Diária'
                    nomeIcon='book'/>
                  </View>

              </View>

                <View style={styles.contMetas}>
                    <Text style={styles.contSubtitulo}>Conquistas desbloqueadas</Text>
                    <View style={styles.cardconquista}>
        
                        <ConquistaCard 
                            titulo="Pioneiro" 
                            subtitulo="Criou 5 metas" 
                        />
        
                        <ConquistaCard 
                            titulo="Foco Total" 
                            subtitulo="7 dias seguidos" 
                        />
        
                </View>
              </View>

              <TouchableOpacity >
                  <View style={styles.btnMeta}>
                      <Icon name='add-outline' size={25} color= '#fff'/>
                      <Text style={styles.btnMetaText}>Nova Meta de Crescimento</Text>
                  </View>
              </TouchableOpacity>
            </View>
        </ScrollView>
    )
} 