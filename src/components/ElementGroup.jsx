import groups from '@/data/groups'
import useCookie from '@/utilities/useCookie'

function ElementGroup({ n }) {
  const [groupsUseIUPAC, setGroupsUseIUPAC] = useCookie(
    'groupsUseIUPAC',
    'true',
    val => {
      return val === 'false' ? false : true
    },
  )

  return (
    <span
      onClick={() => {
        setGroupsUseIUPAC(groupsUseIUPAC ? 'false' : 'true')
      }}
    >
      {groupsUseIUPAC ? n : groups[n]}
    </span>
  )
}

export default ElementGroup
