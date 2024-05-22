
import overviewData from './Data'
import OverView from './OverView'
import './Styles.css'

export default function Text() {
  return (
    <div className="container-overView">
{overviewData.map(item=>{
  return(
    <OverView icon={item.icon} title={item.title} description={item.description} key={item.id}/>
  )
})}
    </div>
  )
}

